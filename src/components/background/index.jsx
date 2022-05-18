export default function Background() {
    return (
        <video className='position-fixed width-100 height-100 position-fixed top-0 left-0 object-fit-cover  ' playsInline autoPlay muted loop>
            <source src="/asserts/media/video/bg.mp4" type="video/mp4"></source>
            <source src="/asserts/media/video/bg.webm" type="video/mp4"></source>
        </video>
    );
}