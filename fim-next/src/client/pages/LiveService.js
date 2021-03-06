import React from 'react'
import NavPage from '../components/NavPage'
import FooterPage from '../components/FooterPage'
import ReactPlayer from 'react-player'

const LiveService = () => {
    return (
        <div>
            <NavPage/>
            <div className="row">
                <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                    
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=lx8Srk4nA_Y"
                        pip={true}
                        />
                    
                    </div>
                </div>
               


                


                <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=IEBTp8mxZsw"
                        pip={true}
                        />
                        
                    </div>
                    </div>
                


                


                <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=qFJL8p6n3rU"
                        pip={true}
                        />
                        
                    </div>
                    </div>
                


                


                <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=J-cvX3he9b8"
                        pip={true}
                        />
                        
                    </div>
                    </div>
                


                
               

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        
                        <ReactPlayer url="https://www.youtube.com/watch?v=fMGhZ5QorVk"/>
                    </div>
                    </div>
                    


                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=jr21cYk9zUE"/>
                    </div>
                    </div>

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=H2wmR0dZv2w"/>
                    </div>
                    </div>

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=CGXh0uBEtBc"/>
                    </div>
                    </div>

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=hSj0e4rxqtA"/>
                    </div></div>


                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=k8bwVZI3uGE"/>
                    </div>
                    </div>

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=Qt7JuWOVTWw"/>
                    </div>
                    </div>

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=XMb40lw4T_k"/>
                    </div>
                    </div>

                    <div className="col-lg-6" style={{marginBottom:'20px'}}>
                    <div className="col-lg-6 col-md-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=GdySa2IDuhY"/>
                    </div>
                    </div>

                </div> 
            <FooterPage/>
        </div>
    )
}

export default LiveService
