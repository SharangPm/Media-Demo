import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}} to={"/home"}>Back To Home <i class="fa-solid fa-arrow-rotate-left fa-beat-fade"></i></Link>
      </div>


      <div className="container mt-5 mb-3 w-100">
            <table className="table shadow w-100 p-3 m-2">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Video Url</th>
                    <th>Time Stamp</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Video</td>
                    <td>
                        <a href="https://www.youtube.com/embed/AiD6SO0BKZI?si=5kXGT9Z1pp8i_2fW">
                            https://www.youtube.com/embed/AiD6SO0BKZI?si=5kXGT9Z1pp8i_2fW
                        </a>
                    </td>
                    <td>01.23, 29/10/2024</td>
                    <td>
                        <button className="text-danger btn">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default WatchHistory
