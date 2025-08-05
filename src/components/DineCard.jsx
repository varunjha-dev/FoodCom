import PropTypes from 'prop-types';

export default function DineCard({ ResData }) {
    return (
        <div className="max-w-sm flex-none">
            <a href={ResData?.cta?.link} target="_blank">
            <div className='relative'>
                <img  className='w-80 h-50 object-cover rounded-2xl'
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${ResData?.info?.mediaFiles[0]?.url}`} 
                    alt= {ResData?.info?.name || 'Restaurant Image'} 
                />
                <div className='absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent'>
                <p className='absolute bottom-2 left-2 text-2xl text-white z-10'>{ResData?.info?.name}</p>
                <p className='absolute bottom-2 right-2 text-2xl text-white z-10'>{ResData?.info?.rating?.value}</p>
                </div>
            </div>
            </a>
        </div>
    );
}

DineCard.propTypes = {
    ResData: PropTypes.shape({
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            mediaFiles: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string.isRequired,
                })
            ).isRequired,
            name: PropTypes.string.isRequired,
            rating: PropTypes.shape({
                value: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
        cta: PropTypes.shape({
            link: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};