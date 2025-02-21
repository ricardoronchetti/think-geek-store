import Link from 'next/link';
import { Button } from '../ui/button';
import logo from '@/public/images/think-geek-logo.png';
import Image from 'next/image';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <Image src={logo} alt='logo'/>
      </Link>
    </Button>
  );
}
export default Logo;
