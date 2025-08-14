import '../styles/Works.css';
import pic1 from'../assets/fondsoap.png';
import pic2 from'../assets/fondresto.png';
import pic3 from'../assets/fondlaw.png';
import pic4 from'../assets/fondsport.png';
import pic5 from'../assets/fondshop.png';
import pic6 from'../assets/fondspa.png';
import pic7 from'../assets/fondacce.png';
import pic8 from'../assets/fonddeco.png';




export default function Works() {
    const groupData1 = [
        {id :1 ,  text : <a href='https://joe-s-shopping.vercel.app/'>Découvrir</a> , image : pic1},
        {id :2 ,  text : <a href='https://resto-ivoire.vercel.app/'>Découvrir</a> , image : pic2 },
        {id :3 ,  text : <a href='https://lawer-web.vercel.app/'>Découvrir</a> , image : pic3},
    ];
    const groupData2 = [
        {id :4 , text : <a href='https://thebeesport.vercel.app/'>Découvrir</a> , image : pic4},
        {id :5 , text : <a href='https://shop-ivoire.vercel.app/'>Découvrir</a> , image : pic5},
        {id :6 , text : <a href='https://spa-online-nine.vercel.app/'>Découvrir</a> , image : pic6},
    ];

     const groupData3 = [
        {id :7 , text : <a href='https://ivoire-accessory.vercel.app/'>Découvrir</a> , image : pic7},
        {id :8 , text : <a href='https://ivoire-deco.vercel.app/'>Découvrir</a> , image : pic8},
    ];
    return(
        <section className='work_main'>
            <div className='work_content'>
                {groupData1.map((group1) =>(
                    <div className='work_box' key={group1.id}>
                    <img className='work_img' src={group1.image} alt='couverture'></img>
                    <h4 className='work_title'>
                        {group1.text}
                    </h4>
                </div>
                ))}
            </div>
             <div className='work_content'>
                 {groupData2.map((group2) =>(
                    <div className='work_box' key={group2.id}>
                    <img className='work_img' src={group2.image} alt='couverture'></img>
                    <h4 className='work_title'>
                        {group2.text}
                    </h4>
                </div>
                ))}
            </div>
            <div className='work_content'>
                 {groupData3.map((group3) =>(
                    <div className='work_box' key={group3.id}>
                    <img className='work_img' src={group3.image} alt='couverture'></img>
                    <h4 className='work_title'>
                        {group3.text}
                    </h4>
                </div>
                ))}
            </div>
        </section>
    )
}