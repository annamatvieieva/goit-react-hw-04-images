
export const ImageGalleryItem = ({ href, onClick, id}) => {
	return (
		<li onClick={() => onClick(id)}>
  <img src={href} alt="" />
</li>
)
}