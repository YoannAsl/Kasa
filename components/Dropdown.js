import { Disclosure } from '@headlessui/react';

const Dropdown = ({ title, content }) => {
	return (
		<Disclosure>
			<Disclosure.Button className='py-2'>{title}</Disclosure.Button>
			<Disclosure.Panel className='text-gray-500'>
				{content}
			</Disclosure.Panel>
		</Disclosure>
	);
};

export default Dropdown;
