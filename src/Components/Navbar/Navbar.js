import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../Images/newus-logo.png'
import {Link} from "react-router-dom";
import './Navbar.css'
const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Services', to: '/Servies', current: false },
  // { name: 'Blog', to : '/Blog', current: false },
  { name: 'About us',to: '/About', current: false },
  { name: 'Contact us', to: '/Contact', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Nabvar() {
  return (
    <Disclosure as="nav" className="sticky top-0 bg-white drop-shadow shadow-blue-600 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className="sr-only ">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center logo">
                  <img
                    className="block h-16 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 lg:block "
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-lg font-base'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-gray-800">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-900 hover:text-white',
                    'block px-3 py-1 rounded-md text-lg font-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
  )
}
export default Nabvar;