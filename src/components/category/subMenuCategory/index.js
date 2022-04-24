import Image from 'next/image';
import {   useState } from 'react';
import * as constants from '../../../constants'
import MultiRangeSlider from '../../common/multiRangeSlider';
import { subCatBox, SubCatBoxFilter, SubCatBoxFilterSwitch, SubCatBoxHeader, SubCatBoxItems, SubCatBoxItemsList, SubCatBoxSimple, SubCatBoxSimpleItems, SubCatBoxSimpleItemsSpan, SubCatContainer } from './style';

var dataFirst=[
    {
      "id": 144,
      "title": "آرایشی و بهداشتی",
      "children": [
        {
          "id": 145,
          "title": "لوازم آرایشی",
          "children": [
            {
              "id": 160,
              "title": "آرایش چشم و ابرو",
              "children": [
                {
                  "id": 827,
                  "title": "ریمل",
                  "children": []
                },
                {
                  "id": 836,
                  "title": "سایه چشم",
                  "children": []
                },
                {
                  "id": 1148,
                  "title": "سایه ابرو",
                  "children": []
                },
                {
                  "id": 1151,
                  "title": "خط چشم",
                  "children": []
                }
              ]
            },
            {
              "id": 161,
              "title": "آرایش لب",
              "children": [
                {
                  "id": 833,
                  "title": "رژلب",
                  "children": []
                },
                {
                  "id": 905,
                  "title": "کرم، بالم و نرم کننده لب",
                  "children": []
                }
              ]
            },
            {
              "id": 162,
              "title": "آرایش صورت",
              "children": [
                {
                  "id": 383,
                  "title": "پاک کننده آرایش",
                  "children": []
                },
                {
                  "id": 818,
                  "title": "کانسیلر",
                  "children": []
                },
                {
                  "id": 821,
                  "title": "پنکک",
                  "children": []
                },
                {
                  "id": 824,
                  "title": "کرم پودر",
                  "children": []
                },
                {
                  "id": 1142,
                  "title": "رژگونه",
                  "children": []
                },
                {
                  "id": 1593,
                  "title": "برنز کننده",
                  "children": []
                },
                {
                  "id": 1596,
                  "title": "پرایمر",
                  "children": []
                },
                {
                  "id": 1617,
                  "title": "کانتور و هایلایت",
                  "children": []
                },
                {
                  "id": 1620,
                  "title": "پالت کانتور",
                  "children": []
                },
                {
                  "id": 1975,
                  "title": "برس ها و تجهیزات آرایشی صورت",
                  "children": []
                }
              ]
            },
            {
              "id": 163,
              "title": " آرایش مو",
              "children": [
                {
                  "id": 1607,
                  "title": "رنگ مو و ابرو",
                  "children": []
                },
                {
                  "id": 1610,
                  "title": "اکسیدان",
                  "children": []
                },
                {
                  "id": 1613,
                  "title": "کرم، شامپو و اسپری رنگ مو",
                  "children": []
                },
                {
                  "id": 1632,
                  "title": "بی رنگ کننده مو",
                  "children": []
                },
                {
                  "id": 1745,
                  "title": "ژل مو",
                  "children": []
                },
                {
                  "id": 1746,
                  "title": "اسپری و موس مو",
                  "children": []
                }
              ]
            },
            {
              "id": 164,
              "title": "آرایش ناخن",
              "children": [
                {
                  "id": 423,
                  "title": "لاک پاک کن",
                  "children": []
                },
                {
                  "id": 1145,
                  "title": "لاک ناخن",
                  "children": []
                },
                {
                  "id": 1551,
                  "title": "تقویت کننده ناخن",
                  "children": []
                }
              ]
            },
            {
              "id": 165,
              "title": "تجهیزات برقی آرایشی",
              "children": [
                {
                  "id": 1263,
                  "title": "اصلاح موی بدن",
                  "children": []
                },
                {
                  "id": 1266,
                  "title": "سشوار",
                  "children": []
                },
                {
                  "id": 1269,
                  "title": "اتو و حالت دهنده ی مو",
                  "children": []
                },
                {
                  "id": 1272,
                  "title": "بیگودی و فر کننده ی مو",
                  "children": []
                },
                {
                  "id": 1275,
                  "title": "اصلاح موی سر",
                  "children": []
                },
                {
                  "id": 1278,
                  "title": "سنگ پای برقی",
                  "children": []
                },
                {
                  "id": 1572,
                  "title": "اصلاح موی صورت",
                  "children": []
                }
              ]
            },
            {
              "id": 594,
              "title": "ابزار آرایش",
              "children": [
                {
                  "id": 561,
                  "title": "کیف لوازم آرایش",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 146,
          "title": "لوازم بهداشتی",
          "children": [
            {
              "id": 166,
              "title": "بهداشت بانوان",
              "children": [
                {
                  "id": 393,
                  "title": "نواربهداشتی",
                  "children": []
                },
                {
                  "id": 531,
                  "title": "دستمال و ژل بهداشتی",
                  "children": []
                },
                {
                  "id": 1512,
                  "title": "اصلاح بدن بانوان",
                  "children": []
                }
              ]
            },
            {
              "id": 167,
              "title": "بهداشت آقایان",
              "children": [
                {
                  "id": 394,
                  "title": "ژل و فوم اصلاح",
                  "children": []
                },
                {
                  "id": 395,
                  "title": "افترشیو",
                  "children": []
                },
                {
                  "id": 426,
                  "title": "لوازم اصلاح",
                  "children": []
                }
              ]
            },
            {
              "id": 168,
              "title": "بهداشت و مراقبت بدن",
              "children": [
                {
                  "id": 388,
                  "title": "شامپو بدن",
                  "children": []
                },
                {
                  "id": 389,
                  "title": "صابون",
                  "children": []
                },
                {
                  "id": 390,
                  "title": "ضد تعریق",
                  "children": []
                },
                {
                  "id": 391,
                  "title": "ژیلت",
                  "children": []
                },
                {
                  "id": 392,
                  "title": "پنبه و گوش پاک کن",
                  "children": []
                },
                {
                  "id": 397,
                  "title": "پودر و کرم موبر",
                  "children": []
                },
                {
                  "id": 404,
                  "title": "پوشک بزرگسال ",
                  "children": []
                },
                {
                  "id": 453,
                  "title": "ضدعفونی کننده",
                  "children": []
                },
                {
                  "id": 717,
                  "title": "دستمال مرطوب",
                  "children": []
                },
                {
                  "id": 851,
                  "title": "کرم، لوسیون و روغن بدن",
                  "children": []
                },
                {
                  "id": 923,
                  "title": "لوازم اصلاح مو",
                  "children": []
                },
                {
                  "id": 1022,
                  "title": "کرم لاغری",
                  "children": []
                },
                {
                  "id": 1864,
                  "title": "نمک حمام",
                  "children": []
                }
              ]
            },
            {
              "id": 169,
              "title": "بهداشت دهان و دندان",
              "children": [
                {
                  "id": 414,
                  "title": "مسواک",
                  "children": []
                },
                {
                  "id": 417,
                  "title": "خمیردندان",
                  "children": []
                },
                {
                  "id": 420,
                  "title": "دهانشویه",
                  "children": []
                },
                {
                  "id": 660,
                  "title": "نخ دندان",
                  "children": []
                },
                {
                  "id": 1587,
                  "title": "خلال دندان",
                  "children": []
                }
              ]
            },
            {
              "id": 170,
              "title": "بهداشت و مراقبت مو",
              "children": [
                {
                  "id": 408,
                  "title": "شامپو ",
                  "children": []
                },
                {
                  "id": 411,
                  "title": "نرم کننده",
                  "children": []
                },
                {
                  "id": 576,
                  "title": "سرم، اسپری و ماسک مو",
                  "children": []
                },
                {
                  "id": 666,
                  "title": "تقویت کننده مو، مژه و ابرو",
                  "children": []
                }
              ]
            },
            {
              "id": 335,
              "title": "بهداشت و مراقبت کودک",
              "children": [
                {
                  "id": 435,
                  "title": "پوشک کودک و نوزاد ",
                  "children": []
                },
                {
                  "id": 438,
                  "title": "دستمال مرطوب کودک",
                  "children": []
                },
                {
                  "id": 441,
                  "title": "صابون بچه ",
                  "children": []
                },
                {
                  "id": 444,
                  "title": "شامپو بچه ",
                  "children": []
                },
                {
                  "id": 450,
                  "title": "کرم، لوسیون و مرطوب کننده کودک",
                  "children": []
                },
                {
                  "id": 770,
                  "title": "شامپو بدن بچه",
                  "children": []
                },
                {
                  "id": 1464,
                  "title": "روغن بچه",
                  "children": []
                },
                {
                  "id": 1482,
                  "title": "کهنه کودک نوزاد",
                  "children": []
                },
                {
                  "id": 1638,
                  "title": "ضد آفتاب",
                  "children": []
                },
                {
                  "id": 1641,
                  "title": "اسپری مو",
                  "children": []
                }
              ]
            },
            {
              "id": 336,
              "title": "مراقبت پوست",
              "children": [
                {
                  "id": 384,
                  "title": "مراقبت بعد از اصلاح",
                  "children": []
                },
                {
                  "id": 385,
                  "title": "مرطوب کننده و آبرسان",
                  "children": []
                },
                {
                  "id": 386,
                  "title": "کرم دست و صورت",
                  "children": []
                },
                {
                  "id": 396,
                  "title": "لایه بردار پوست",
                  "children": []
                },
                {
                  "id": 405,
                  "title": "ضدعفونی کننده دست",
                  "children": []
                },
                {
                  "id": 573,
                  "title": "ژل شست و شوی صورت",
                  "children": []
                },
                {
                  "id": 579,
                  "title": "ژل و کرم ضدآفتاب",
                  "children": []
                },
                {
                  "id": 582,
                  "title": "کرم و روغن برنزه کننده",
                  "children": []
                },
                {
                  "id": 926,
                  "title": "کرم و ژل ضدجوش",
                  "children": []
                },
                {
                  "id": 947,
                  "title": "کرم ضد چروک",
                  "children": []
                },
                {
                  "id": 950,
                  "title": "کرم ضد لک",
                  "children": []
                },
                {
                  "id": 974,
                  "title": "کرم دور چشم",
                  "children": []
                },
                {
                  "id": 977,
                  "title": "کرم و ژل سفت کننده پوست",
                  "children": []
                },
                {
                  "id": 1043,
                  "title": "کرم و روغن رفع ترک بدن",
                  "children": []
                },
                {
                  "id": 1046,
                  "title": "کرم و سرم روشن کننده",
                  "children": []
                },
                {
                  "id": 1049,
                  "title": "کرم و ژل ترمیم کننده",
                  "children": []
                },
                {
                  "id": 1428,
                  "title": "سرم پوست",
                  "children": []
                },
                {
                  "id": 1431,
                  "title": "ماسک صورت و بدن",
                  "children": []
                }
              ]
            },
            {
              "id": 338,
              "title": "بهداشت جنسی",
              "children": [
                {
                  "id": 429,
                  "title": "کاندوم",
                  "children": []
                },
                {
                  "id": 432,
                  "title": "محصولات مراقبت جنسی",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 147,
          "title": "عطر، ادکلن و اسپری",
          "children": [
            {
              "id": 171,
              "title": "عطر و ادکلن زنانه",
              "children": []
            },
            {
              "id": 172,
              "title": "عطر و ادکلن مردانه",
              "children": []
            },
            {
              "id": 173,
              "title": "جیبی و اسپری زنانه",
              "children": []
            },
            {
              "id": 174,
              "title": "جیبی و اسپری مردانه",
              "children": []
            },
            {
              "id": 830,
              "title": "عطر کودک",
              "children": []
            }
          ]
        }
      ]
    },
  ]
var data=[
    {
        title:'کالاهای اساسی و خوار و بار',
        item:[
            'برنج',
            'روغن',
            'حبوبات',
            'شکر، قند و نبات',
            'برنج',
            'روغن',
            'حبوبات',
            'شکر، قند و نبات'
            ,'برنج',
            'روغن',
            'حبوبات',
            'شکر، قند و نبات',
        ]
    },
    {
        title:'کالاهای اساسی و خوار و بار',
        item:[
            'برنج',
            'روغن',
            'حبوبات',
        ]
    },
    // {
    //     title:'کالاهای اساسی و خوار و بار',
    //     item:[
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات'
    //         ,'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //     ]
    // },
    // {
    //     title:'کالاهای اساسی و خوار و بار',
    //     item:[
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات'
    //         ,'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //     ]
    // },
    // {
    //     title:'کالاهای اساسی و خوار و بار',
    //     item:[
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات'
    //         ,'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //     ]
    // },
    // {
    //     title:'کالاهای اساسی و خوار و بار',
    //     item:[
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات'
    //         ,'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //     ]
    // },
    // {
    //     title:'کالاهای اساسی و خوار و بار',
    //     item:[
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات'
    //         ,'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //     ]
    // },
    // {
    //     title:'کالاهای اساسی و خوار و بار',
    //     item:[
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //         'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات'
    //         ,'برنج',
    //         'روغن',
    //         'حبوبات',
    //         'شکر، قند و نبات',
    //     ]
    // }

    
]
const SubMenuCategory=(props)=>{

  const{items}=props

  const [more,setMore]=useState({})
  const [select,setSelect]=useState({})
  const [filter,setFilter]=useState(false)
  const [morePrice,setMorePrice]=useState(false)



  const changeMultiRange=()=>{

  }
  
  

  return(
      <SubCatContainer>
        <SubCatBoxSimple>
          <SubCatBoxHeader>
              <span>دسته بندی  کالاهای</span>                                
          </SubCatBoxHeader>
          <SubCatBoxSimpleItems>
              {
                  dataFirst[0].children.map((item,index)=>(
                      <SubCatBoxSimpleItemsSpan
                      key={index}
                      select={select[index] ?true :false}
                      onClick={()=>{setSelect({[index]:true})}}
                      >
                          {item.title}
                      </SubCatBoxSimpleItemsSpan>                                    
                  ))
              }
          </SubCatBoxSimpleItems>
        
        </SubCatBoxSimple>
        {
          data.map((item,parnetIndex)=>(
              <SubCatBoxSimple key={parnetIndex}>
                  <SubCatBoxHeader 
                  onClick={()=>setMore({...more,[parnetIndex]:!more[parnetIndex]})}
                  open={!more[parnetIndex] ?true :false}>
                      <span>دسته بندی</span>
                      <Image 
                      src={constants.Icons.upArrow} 
                      height={8}
                      width={15}
                      />
                  </SubCatBoxHeader>
                  <SubCatBoxItems style={{display:more[parnetIndex] ?'flex' :'none'}}>
                      {
                          item.item.map((item,index)=>(
                              <SubCatBoxItemsList key={index}>
                                  <input type="checkbox" id={index} name={index} value={index}/>
                                  <label key={index}>{item}</label>
                              </SubCatBoxItemsList>
                          ))
                      }
                  </SubCatBoxItems>
              </SubCatBoxSimple>
          ))
        }
        <SubCatBoxSimple>
            <SubCatBoxFilter>
                <span>فقط کالاهای موجود</span>
                <SubCatBoxFilterSwitch onClick={()=>setFilter(!filter)}>
                    <input type="checkbox" checked={filter}/>
                    <span className="slider round"></span>
                </SubCatBoxFilterSwitch>

            </SubCatBoxFilter>
        </SubCatBoxSimple>

        <SubCatBoxSimple>
          <SubCatBoxHeader 
          onClick={()=>setMorePrice(!morePrice)}
          open={morePrice ?true :false}>
              <span>محدوده قیمت موردنظر</span>
              <Image 
              src={constants.Icons.upArrow} 
              height={8}
              width={15}
              />
          </SubCatBoxHeader>
          <SubCatBoxItems style={{display:morePrice ?'flex' :'none'}}>
            <MultiRangeSlider 
              min={0}
              max={1000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
          </SubCatBoxItems>
        </SubCatBoxSimple>
    </SubCatContainer>
  )
}
export default SubMenuCategory;