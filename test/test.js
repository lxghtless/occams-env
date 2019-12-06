import test from 'ava';
import occamsEnv from '../src';

test('should get home value as expected', t => {
	t.is(occamsEnv.get('home'), process.env.HOME);
});
