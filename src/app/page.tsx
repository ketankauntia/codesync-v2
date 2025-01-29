import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  return (
    <SignInButton>
      <Button>Sign in</Button>
    </SignInButton>
  );
}
