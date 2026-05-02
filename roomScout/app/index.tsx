import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Redirect href="/tabs" />;
  } else {
    return <Redirect href="/sign-up" />;
  }
}