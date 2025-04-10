import React from 'react'
import {MapPinHouse,PhoneForwarded,Mail} from 'lucide-react'

function Details() {
  return (
    <div className='px-4'>
      <div className="bg-gradient-to-t from-teal-950 to-teal-300 pt-28  flex flex-col items-center pb-28 gap-x-10">
      <h2 className="text-white text-4xl font-bold text-center mb-10">GET IN TOUCH</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-white max-w-6xl w-full">
        <div className="flex flex-col items-center text-center p-6">
          <div className="m-8"><MapPinHouse size={55} color="#ffffff" /></div>
          <h3 className="font-semibold text-2xl mb-2">ADDRESS</h3>
          <p className="text-lg ">Weifield Group Contracting<br />146 Yuma Street, Denver, CO 80223<br />Northern Division Office<br />1270 Automation Drive, Windsor, CO 80550</p>
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <div className="m-8"><PhoneForwarded size={55} color="#ffffff" /></div>
          <h3 className="font-semibold text-2xl mb-2">PHONE</h3>
          <p className="text-lg ">Weifield Group Contracting<br />303.428.2011 (phone)<br />303.202.0466 (facsimile)<br />Weifield 24/7 Service Dept<br />303.428.2011 (Press 2 for emergency calls)</p>
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <div className="m-8"><Mail size={55} color="#ffffff" /></div>
          <h3 className="font-semibold text-2xl mb-2">EMAIL</h3>
          <p className="text-lg ">Request for Proposal<br />info@weifieldgroup.com<br />Electrical Service Calls<br />service@weifieldcontracting.com<br />Employment Opportunities<br />careers@weifieldcontracting.com</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Details

