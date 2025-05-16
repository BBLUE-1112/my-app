import apiService from "../apiServices/apiService"; // Import the service
export default async function Page(){
    const data = await apiService.getPagedata("wp/v2/pages/8");
    const pageData= data.acf;
    console.log(pageData);
    return <><h1>hello</h1>
    <div className="col-md-6 ps-md-5 order-2 order-md-1">
              <h1
                dangerouslySetInnerHTML={{
                  __html: pageData.banner_title,
                }}
              ></h1>
              <p>
                <span className="scroll"></span>
                <span>{pageData.banner_description}</span>
              </p>
              <div
                className="widgets-container"
                // onMouseEnter={() => setIsHovered(false)}
                // onMouseLeave={() => setIsHovered(true)}
              >
                {pageData.banner_clutch_data ? (
                  pageData.banner_clutch_data.map((item, i) => (
                    <div className="widget" key={i}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.clutch_iframe_link}
                        title={item.clutch_iframe_title}
                      ></iframe>
                    </div>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            </>

    
    
}