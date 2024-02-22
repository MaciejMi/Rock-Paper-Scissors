//className="button button-game"

const TabButton = ({ name, image, alt, ...props }) => {
	return (
		<li>
			<button {...props}>
				{image && <img src={image} alt={alt} />}
				{name}
			</button>
		</li>
	);
};

export default TabButton;
