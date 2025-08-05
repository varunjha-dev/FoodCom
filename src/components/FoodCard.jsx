import PropTypes from 'prop-types';
export default function FoodCard({ foodData }) {
    return (
        <div>
            <a href={foodData?.action?.link}>
                <img className="w-40 h-50 object-cover"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
                    alt={foodData?.action?.text || "Food item"}
                />
                <h2 className='font-serif font-bold w-40 text-center'></h2>
                {/* <h2 className='font-serif font-bold w-40 text-center'>{foodData?.action?.text}</h2> */}
            </a>
        </div>
    );
}
FoodCard.propTypes = {
    foodData: PropTypes.shape({
        imageId: PropTypes.string.isRequired,
        action: PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string
        })
    }).isRequired
};