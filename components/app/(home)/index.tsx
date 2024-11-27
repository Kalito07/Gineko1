import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
    const { user } = useUser();

    return (
        <View>
            <Text>HUI</Text>
            <SignedIn>
                <Text>{user?.emailAddresses[0]?.emailAddress}</Text>
            </SignedIn>
            <SignedOut>
                {/* Use href consistently */}
                <Link href="/sign-in">
                    <Text>Sign In</Text>
                </Link>
                <Link href="/sign-up">
                    <Text>Sign Up</Text>
                </Link>
            </SignedOut>
        </View>
    );
}
