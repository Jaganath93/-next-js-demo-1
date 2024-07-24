import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export const Cards = ({data,bhk})=>{
   const [like,disLike] = useState(false);

    const handleLike = (id)=>{
      if(id===data.id)  disLike(!like);
    }

    const handleDragStart = (e) => e.preventDefault();


    return( bhk ?
        <div className="col">
                <div className="card rounded border border-white bg-white" style={{width: '20rem'}} onDragStart={handleDragStart} role="presentation">
                  <img src={data.img} className="card-img-top card-img"  alt={data.id}/>
                    <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title text-primary fw-bolder">₹{data.price}</h5>
                      { like ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" role="button" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16" onClick={()=> handleLike(data.id)}>
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                         :
                        <FontAwesomeIcon icon={faHeart} style={{color: "#fd3f3f",}} role="button" onClick={()=>handleLike(data.id)}/>}
                      </div>
                      <h6 className="card-title">{data.bhk}BHK Flat in {data.area}</h6>
                        <p className="card-text text-secondary fw-normal opacity-50">
                            
                            {/* Location Icons starts here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                            {/* Location Icons ends here */}

                            {data.address}.</p>
                            <div>
                                <p></p>
                            </div>
                         <div className="d-flex justify-content-between mb-0">
                            <div>
                                <h6 className="text-muted opacity-50">Listed On</h6>
                                <p className="fw-bolder">{data.listedOn}</p>
                            </div>
                         <div><button href="#" className="btn btn-primary">View Details</button></div>
                         </div>
                    </div>
               </div>
                </div>
                :
                <div className="col">
                <div className="card rounded border border-white bg-white" style={{width: '20rem'}} onDragStart={handleDragStart} role="presentation">
                  <img src={data.img} className="card-img-top card-img"  alt={data.id}/>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                      <h5 className="card-title text-primary fw-bolder">₹{data.price}</h5>
                      { like ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" role="button" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16" onClick={()=> handleLike(data.id)}>
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                         :
                        <FontAwesomeIcon icon={faHeart} style={{color: "#fd3f3f",}} role="button" onClick={()=>handleLike(data.id)}/>}
                      </div>
                      <h6 className="card-title">{data.sqft}sqft Plot for Sale in {data.area}</h6>
                        <p className="card-text text-secondary fw-normal opacity-50">
                            
                            {/* Location Icons starts here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                            {/* Location Icons ends here */}

                            {data.address}.</p>
                            {/* <div>
                                <p></p>
                            </div> */}
                         <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="text-muted opacity-50">Listed On</h6>
                                <p className="fw-bolder">{data.listedOn}</p>
                            </div>
                         <div>
                         <button href="#" className="btn btn-primary">View Details</button>
                         </div>
                         </div>
                    </div>
               </div>
                </div>
    );
}