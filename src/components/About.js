import '../static/stylesheet/about.css';

export default function About({ show, onClose }) {
	return (
		<>
			<section 
				className="about-offcanvas"
				style={{right: show ? '0px' : '-400px'}}
			>
				<div className='close-btn' style={{ textAlign: 'left' }}>
					<button className='btn btn-dark' 
						onClick={onClose}
						style={{ 
							background: 'none',
							outline: 'none',
							border: 'none',
							boxShadow: 'none',
							fontSize: '2rem',
						}} >
						&#10006;
					</button>
				</div>
				<div>
					<h3 className='product-heading history-h'>
						<span style={{display: 'inline-block', borderTop: '.2rem solid white', paddingTop: '0.2rem'}}>Creators</span>
					</h3>
					<div id="about-container">
						<div>Nakul</div>
						<div>Raghav Sharma</div>
						<div>Sumit Saini</div>
					</div>
					<a 
						href="https://github.com/Nakul2010991635/Beyond-The-Trailer.git" 
						target="_blank"
						style={{
							width: '90%', 
							margin: '3rem auto', 
							display: 'block'
						}}
					>
						<img 
							style={{ width: '100%' }}
							src="https://github-readme-stats.vercel.app/api/pin?username=Nakul2010991635&repo=Beyond-The-Trailer&title_color=fff&icon_color=f9f9f9&text_color=ffffffaa&bg_color=45,000000,2f4f4f,808080&show_owner=true"
						/>
					</a>
					
				</div>
			</section>
		</>
	);
}