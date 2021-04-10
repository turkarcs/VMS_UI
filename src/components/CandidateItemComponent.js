import React from 'react'
import AddCandidateButton from './Candidate/AddCandidateButton';
import GetCandidateButton from './Candidate/GetCandidateButton';
import DeleteCandidateButton from './Candidate/DeleteCandidateButton';


class CandidateItemComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
                 
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-3">
                         <span className="mx-auto"><b>REGISTER Candidate </b></span>
                     </div>
                     <div className="col-md-7 d-none d-lg-block">
                         <p>This service is to add the candidates details </p>
                     </div>
                     <div className="col-md-2">
                        <AddCandidateButton />
                     </div>
                 </div>
             </div>
             <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>VIEW Candidate </b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to view the details of candidates in the table</p>
                        </div>
                        <div className="col-md-2">
                            <GetCandidateButton />
                        </div>
                        </div>
                </div>
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <span className="mx-auto"><b>DELETE Candidate</b></span>
                        </div>
                        <div className="col-md-7 d-none d-lg-block">
                            <p>This service is to delete the candidate details</p>
                        </div>
                        <div className="col-md-2">
                            <DeleteCandidateButton />
                        </div>

                    </div>
                </div>

                
         </div>
        
        )
    }
}

export default CandidateItemComponent;