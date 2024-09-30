import './CardCity.css'
export default function CardCity(props){
    return(
        <div className="container">
 	        <div className="row">
		<div className="col-lg-12">
           <div className="box">
               
				<div className="box-title">{props.region}</div>
                
				<div className="box-text">
					<span>{props.city}</span>
				</div>
			</div>
		</div>	 
	</div>		
</div>
    )
}