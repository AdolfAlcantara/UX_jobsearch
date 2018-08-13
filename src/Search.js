import React,{Component} from 'react';
import positions from './positions';
import {Link} from 'react-router-dom';
import './Search.css'

// /repos/wragdan/
// localhost:3000/search?tags=software,engine,web

export class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            keyw: this.props.match.params.keyword,
        }
    }
    
    
    componentDidMount() {
    }

    render(){
        return(
            <div>
                <Link to="/">Regresar</Link>
                <ul>
                    {positions.filter((job)=>{
                        return (
                            job.title.includes(`${this.state.keyw}`) ||
                            job.type.includes(`${this.state.keyw}`) ||
                            job.location.includes(`${this.state.keyw}`) ||  
                            job.description.includes(`${this.state.keyw}`) ||  
                            job.company.includes(`${this.state.keyw}`)
                        )
                    }).map(job=>(
                        <li key={job.id}>
                            <a href={job.how_to_apply}>{job.title}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default Search;