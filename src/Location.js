import react from 'react';
import './Location.css';
import { Link } from 'react-router-dom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HouseIcon from '@mui/icons-material/House';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CastleIcon from '@mui/icons-material/Castle';
import ForestIcon from '@mui/icons-material/Forest';
import HouseboatIcon from '@mui/icons-material/Houseboat';
const Location = ()=>{
    return(
        <div className='location'>
            <div className='location__partOne'>
                <div className='location__icon'>
                    <Link to='/search'>
                        <LocalFireDepartmentIcon/>
                        <p>Trending</p>
                    </Link>
                </div>

                <div className='location__icon'>
                    <Link to='/search'>
                        <WidgetsIcon/>
                        <p>Off-the-grid</p>
                    </Link>    
                </div>

                <div className='location__icon'>
                    <Link to='/search'>
                        <HouseIcon/>
                        <p>Tiny-House</p>
                    </Link>
                </div>

                <div className='location__icon'>
                    <Link to='/search'>
                        <BeachAccessIcon/>
                        <p>Beach-House</p>
                    </Link>
                </div>

                <div className='location__icon'>
                    <Link to='/search'>
                        <CastleIcon/>
                        <p>Castles</p>
                    </Link>
                </div>

                <div className='location__icon'>
                    <Link to='/search'>
                        <ForestIcon/>
                        <p>Forest</p>
                    </Link>
                </div>

                <div className='location__icon'>
                    <Link to='/search'>
                        <HouseboatIcon/>
                        <p>Houseboat</p>
                    </Link>   
                </div>
            </div>

            <div>Filters</div>
        </div>
    )
}

export default Location;