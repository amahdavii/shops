import Slider from 'rc-slider';
import 'rc-tooltip/assets/bootstrap.css';
import rcstyle from 'rc-slider/assets/index.css';
import React, { useCallback, useEffect, useState, useRef } from "react";
import { ButtonSLider, RangeSlider, SliderContainer, TitleRangeSlider } from './style';
import * as constants from 'src/constants'

const { Range } = Slider;
const MultiRangeSlider = ({ min, max }) => {
    
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    
    const handleChangeRange=(e)=>{
      console.log('handleChangeRange',e)
    }
  
    
  
    return (
      <SliderContainer>
        <TitleRangeSlider>
          <span>از ۱۸۰۷۲ تومان</span>
          <span>تا ۳۴۵۰۸ تومان</span>
        </TitleRangeSlider>
        <RangeSlider>
          <Range 
          step={20} 
          defaultValue={[minVal, maxVal]} 
          onChange={handleChangeRange} 
            handleStyle={[{ backgroundColor: '#004f9e',borderColor: '#004f9e'},{ backgroundColor: '#004f9e',borderColor: '#004f9e'}]}
            trackStyle={[{ backgroundColor: '#004f9e',borderColor: '#004f9e' }]}
            activeDotStyle	={{ backgroundColor: '#004f9e',borderColor: '#004f9e',borderWidth:0}}
          />  
        </RangeSlider>
        <ButtonSLider>{constants.strings.mainCategoryPage.rangePriceSubmit}</ButtonSLider>      
      </SliderContainer>
    );
}

export default MultiRangeSlider;
