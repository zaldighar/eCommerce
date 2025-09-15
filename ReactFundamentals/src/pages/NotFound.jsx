import notFoundGif from '../assets/404.gif';

const NotFound = () => {
    return (
        <div>
            <a href="/"><img src={notFoundGif} alt='404 Not Found' /></a>
        </div>
    );
};

export default NotFound;