import react from 'react';
import profile from '../img/profile.jpg';

function Content_About (){
    return(
        <section Id="About" className='contents' >
            <h2>About</h2>
            <div style={{display:'grid', gridTemplateColumns:"2fr 3fr"}}>
                <div>
                    <img src={profile} style={{heigth:'70%', width:'70%', margin:'auto', display:'flex', alignItems:'center'}} />
                </div>
                <div className="About-text">
                    <p className="About-ask">이런 사진을 찍을 때 행복해요!</p>
                    <p> 당시의 감정과 분위기를 잘 담고 있는 사진이요. <br/> 
                    그런 사진은 오래 추억할 수 있거든요.</p>
                    <p className="About-ask"> 사진을 찍는 이유</p>
                    <p>바쁘게 살다보면, 추억을 놓치기 쉽더라고요.<br/>
                        누군가의 소중한 순간을 아름답게 남겨주고 싶어요.<br/>
                        추억을 오래 간직하고, 다시 꺼내볼 수 있도록.</p>
                    <p className="About-ask">이런 사진작가가 되고 싶습니다</p>
                    <p>우리 모두는 있는 그대로 아름답습니다.<br/>
                    각자가 가진 본연의 아름다움을 잘 발견하고,<br/>
                    그것을 돋보이게 표현할 줄 아는 작가가 되고 싶어요.</p>
                
                </div>
            </div>
        </section>
    );
}

export default Content_About;
