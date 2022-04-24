import React, { useEffect, useState } from 'react';
import { IsActive, LiSelect, PagerItems, PaginationItem } from './style';
import * as constant from 'src/constants'
import Image from 'next/image';
import {IconBox} from 'src/styles/sharedStyle'

const Pagination = props => {
    const { totalPages ,changePage} = props;
  
  

    const[page,setPage]=useState([]);

    const[start,setStart]=useState(1);
    const[end,setEnd]=useState(5);
    const[current,setCurrent]=useState(1);

    useEffect(()=>{
        if(totalPages>=5){
            setPage(Array.from({length: 5}, (v, i) => i+1))
            setCurrent(1)

        }
        else{
            setPage(Array.from({length: totalPages}, (v, i) => i+1))
            setCurrent(1)

        }
    },[totalPages])



    const handleClick=(val)=>{
        setCurrent(val)
    }

    const handleArrowNext=()=>{
        setCurrent(end)
    }
    const handleArrowBack=()=>{
        setCurrent(start)
    }

    const handleChangePage=()=>{
        var startPage,endPage
        if (totalPages <= 5) {
            startPage=1
            endPage=totalPages
        } else {
            if (current <= 2) {
                startPage=1
                endPage=5
            } else if (current + 3 >= totalPages) {  
                startPage=totalPages-4
                endPage=totalPages 
            } else {
                startPage=current-1
                endPage=current+3              
            }
        }
        setStart(startPage)
        setEnd(endPage)



    }

    useEffect(() => {
        // changePage(current)
        handleChangePage()
    }, [current]);



    return (
        <PagerItems>
            {start>1
            ?
             <LiSelect className="pagination-item"  onClick={handleArrowBack}>
                {/* <img src={constant.Icons.paginate.src} width={10} height={10} /> */}
                <IconBox data-icon="b" size="32" color="#c0c0c0"/>

            </LiSelect>
            :null
            }
            {page.map((page,index) => (
                current==index+start
                    ? <IsActive key={page}  onClick={()=>handleClick(start+index)}>
                        <span>{start+index}</span>
                    </IsActive>
                    : <PaginationItem key={page}  onClick={()=>handleClick(start+index)}>
                        <span>{start+index}</span>
                    </PaginationItem>                
               
            ) )}            
            <PaginationItem  onClick={handleArrowNext}>
                {/* <Image src={constant.Icons.paginate} width={10} height={10}/>*/}
                <IconBox data-icon="a" size="32" color="#c0c0c0"/>

            </PaginationItem>
        </PagerItems>

     );
}
 
export default Pagination;