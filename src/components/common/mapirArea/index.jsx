import { useEffect} from 'react';


const MapirArea = ({setLocation}) => {



  useEffect(()=>{
    // document.getElementById('mapid').innerHTML = "<div id='mapid' style={{ height: '1000px'}}></div>";
    // console.log('map id',document.getElementById('mapid').getElementsByClassName('mapp-container'))
    if(document.getElementById('mapid').getElementsByClassName('mapp-container').length==0){
      var app =new Mapp({
        element: '#mapid',
        presets: {
            latlng: {
                lat: 35.72,
                lng: 51.42,
            },
            zoom: 13,
        },
        apiKey:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4NzVmZWZjNDgyZTBmYWUwMTA5NjNjMGE1NThlZjJhMDg5MzI0ZTU1YWI2YTU1MTJhY2E4MjZjNDRhOTEyMGEzZTg2NjJlYmUzZGYzYzZmIn0.eyJhdWQiOiIxNzIwMSIsImp0aSI6ImU4NzVmZWZjNDgyZTBmYWUwMTA5NjNjMGE1NThlZjJhMDg5MzI0ZTU1YWI2YTU1MTJhY2E4MjZjNDRhOTEyMGEzZTg2NjJlYmUzZGYzYzZmIiwiaWF0IjoxNjQ1ODczOTE0LCJuYmYiOjE2NDU4NzM5MTQsImV4cCI6MTY0ODI4OTUxNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.oxWc2LfLiau0nX_PGRKJIgvm_pCYyFlHBjSNxoFNemoH4F8nqb70i7LvEXMAaAUOFn8qUqv3gvwnmEL3P2TlWazw0-Sg3oM2K8hsJ3xSuyi3aECLrWJ3ijtXoRCpNNegm9-KitJGzCHmT4LAtkw_UNZMj0crr7rBgqiDoMypw3MxcqFljBdE8jN8kOGJ_oFRkbs4C6UBejsAP0yxh8JEBrWvW5w_cPB-SZmqAhkyt9cVxwNtEvROaRhKLyTSuBlod-HTn8N3y5et7JDBvnlnN70NVWEvp8IlFlAnoJnm3mztFSxHm4T4q2kyrRrK5LYNs7P8F-Bf6tZiIYv8ZHdOpQ'

      });
      app.addLayers();
      app.addVectorLayers();

      // const customMarker = new Icon({
      //   iconUrl:require('../../../../public/assets/icon/location.png')
      // })
      
      app.map.on('click', (e)=>{
        setLocation({
          lat: e.latlng.lat,
          long: e.latlng.lng
        })
        app.addMarker({
          name: 'advanced-marker',
          latlng: {
            lat: e.latlng.lat,
            lng: e.latlng.lng
          },
          popup: false,
          icon: app.icons.red,
          // icon: {
          //   iconUrl:require('../../../../public/assets/icon/marker@2x.png')
          // },
        });
      });
      
      //----remove map ir logo from bottom map------
      var divLogo=document.getElementsByClassName('mapp-logo')
      divLogo[0].remove();
    }
  },[])


 
  return (
    <div id="mapid" style={{ height: '100%',width:'100%'}}></div>  
  )
}

export default MapirArea
