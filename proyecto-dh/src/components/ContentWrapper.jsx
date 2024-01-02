import React, {useState} from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Table from "./Table";

function ContentWrapper(){
    return(
        <>
            <div id="content-wrapper" className="d-flex flex-column">
        
                <div id="content">
                
                    <TopBar />
                    <ContentRowTop />
                    <Table />
                    
                </div>
            
                <Footer />
            </div>
        </>
    )
}

export default ContentWrapper;