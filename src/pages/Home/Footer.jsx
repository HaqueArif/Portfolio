import email from '../../assets/social/email.png'
import linkdin from '../../assets/social/linkedin.png'
import github from '../../assets/social/github.png'
import facebook from '../../assets/social/facebook.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-neutral py-10 px-2 md:px-10 '>
            <div className='md:flex justify-between items-center'>
                <div>
                    <div className='flex justify-center md:justify-start gap-3 my-3'>
                        <Link to='https://www.linkedin.com/in/arif-ul-haque-34792a27b/' target='_blank'><img className='w-10 h-10 rounded-full duration-500 hover:scale-125' src={linkdin} alt="" /></Link>
                        
                        <Link to='https://github.com/HaqueArif' target='_blank'><img className=' w-10 h-10 bg-white rounded-full  duration-500 hover:scale-125' src={github} alt="" /></Link>

                        <Link to='https://www.facebook.com/profile.php?id=100007848557220' target='_blank'> <img className='w-10 h-10  duration-500 hover:scale-125' src={facebook} alt="" /></Link>
                    </div>
                    <p className='text-center md:text-left text-xs tracking-widest'>Contact: +880 1710209669</p>
                    <p className='text-center md:text-left text-xs mb-5 tracking-widest'>Email: haquearif143@gmail.com</p>
                </div>
                <div>
                    
                    <p className='text-center md:text-end text-xs tracking-widest my-1'>Address: Moulvibazar-3200, Sylhet, Bangladesh.</p>
                    <p className='text-center md:text-end text-xs tracking-widest'>&copy; 2023 AH_ is Proudly Powered by Ariful Hoque </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;