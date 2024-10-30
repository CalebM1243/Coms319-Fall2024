import "bootstrap/dist/css/bootstrap.css";
function Summary({dataF, setDataF, viewer, setViewer}){
    const updateHooks = ()=>{
        setViewer( 0 );
        setDataF( {} );
        };
    return (
    <div>
        <h1>Payment summary:</h1>
        <div className="card">
            <div className="title">
                <h3 >{dataF.fullName}</h3>
            </div>
            <div className="col-md-8">
                <p>{dataF.email}</p>
            </div>
            <div className="col-md-8">
                <p>{dataF.city},{dataF.state} {dataF.zip} </p>
            </div>
        </div>
        <button onClick={updateHooks} className="btn btn-secondary">Submit</button>
    </div>
    );
    };

export default Summary;