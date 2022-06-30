
const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div>
            <p className='text-center'><small>Copy &#169; {year} All Rights reserve by Saddam</small></p>
        </div>
    );
};

export default Footer;