import React, { Component } from 'react'
import Card from './Card'

export default class News extends Component {
constructor()
{
  super()
  this.state={
    news:null,
    lng:null,
    type:null
  }
}
   getData = async()=>{
      let res =await fetch(`https://newsapi.org/v2/everything?q=all&language=hi&apiKey=63e22c008f394270921fab49006be05a`);
      res.json().then((item)=>{
        this.setState({news:item.articles})
      });

      
    }


  componentDidMount(){
   this.getData();
  }

  render() {
    return (
      <>
          
    
        <section className='relative z-[3] bg-slate-20 h-full w-full   flex  py-5 px-10 gap-10 justify-between items-center  overflow-x-auto'>

        <ul className='sticky top-0 h-60 z-[3] bg-zinc-600 flex flex-shrink-0 flex-col text-white rounded-lg justify-center items-center  gap-5 p-2'>
        <li ><button className='cursor-pointer' onClick={this.setState({lng:"hi"})}>Hindi</button> </li>
        <li ><button className='cursor-pointer' onClick={this.setState({lng:"en"})}>Englesh</button> </li>
        <li ><button className='cursor-pointer' onClick={this.setState({type:"all"})}>All News</button> </li>
        <li ><button className='cursor-pointer' onClick={this.setState({type:"technology"})}>Technology</button> </li>
        <li ><button className='cursor-pointer' onClick={this.setState({type:'sports'})}>Sports</button> </li>
        </ul>
      
     {
      this.state.news?
      <div className=' absolute top-0  flex flex-wrap py-5 px-5 gap-10 justify-center items-center overflow-x-auto' >
     { this.state.news.map((data)=>{
        return (
          
          <Card data={data} />
        )
      })}</div> : <p>data not found</p>
     } 
        </section>
      </>
    )
  }
}
