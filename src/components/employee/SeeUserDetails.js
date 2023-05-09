import React from 'react'

const SeeUserDetails = () => {
  return (
    <div className='container'>
      {/* top section */}
      <div className='row d-flex justify-content-center'>

        <div className='col-5'>
          {/* select society */}
          <form>
            <label for="society">Choose a society:</label>
            <select name="society" id="society">
              <option value="ramnagar">Ramnagar</option>
              <option value="clementown">Clementown</option>
              <option value="krishnanagar">Krishna nagar</option>
              <option value="bchock">Bchock</option>
            </select>
          </form>
        </div>

        <div className='col-5'>
          {/* select user */}
          <form>
            <label for="user">Choose a user:</label>
            <select name="user" id="user">
              <option value="user1">user1</option>
              <option value="user2">user2</option>
              <option value="user3">user3</option>
              <option value="user4">user4</option>
            </select>
          </form>
        </div>
      </div>

      {/* mid section
      <div className='row'>
        <div className='col-3'>
          Personal
        </div>
        <div className='col-3'>
          Water
        </div>
        <div className='col-3'>
          Electricity
        </div>
      </div>

       bottom section 
      <div className='row'>
        <div className='col-3'>
          Personal
        </div>
        <div className='col-3'>
          Water
        </div>
        <div className='col-3'>
          Electricity
        </div>
      </div> */}
    </div>
  )
}

export default SeeUserDetails