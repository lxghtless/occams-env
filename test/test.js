import test from 'ava';
import oe from '../src';

test('should get home value as expected', t => {
	t.is(oe.get('home'), process.env.HOME);
});
