import React from 'react'
import './searchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'
function searchPage() {
  return (
    <div className='search__page'>
      <div className='searchPage__info'>
        <p>62 stays &middot; 26 August to 30 August &middot; 2 guest</p>
        <h1>Stay nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult 
        img = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        location = " Private room in New York City"
        title = "Stay at this spacious Edwardian House"
        description = "2 guest &middot; 1 bedroom &middot; 1.5 shared bedroom &middot; Wifi &middot; Kitchen"
        star = {4.5}
        price = "$30 / night"
        total = "$112 total"
      />

      <SearchResult 
        img = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        location = " Private room in New York City"
        title = "Stay at this spacious Edwardian House"
        description = "2 guest &middot; 1 bedroom &middot; 1.5 shared bedroom &middot; Wifi &middot; Kitchen"
        star = {4.5}
        price = "$30 / night"
        total = "$112 total"
      />

      <SearchResult 
        img = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        location = " Private room in New York City"
        title = "Stay at this spacious Edwardian House"
        description = "2 guest &middot; 1 bedroom &middot; 1.5 shared bedroom &middot; Wifi &middot; Kitchen"
        star = {4.5}
        price = "$30 / night"
        total = "$112 total"
      />

      <SearchResult 
        img = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        location = " Private room in New York City"
        title = "Stay at this spacious Edwardian House"
        description = "2 guest &middot; 1 bedroom &middot; 1.5 shared bedroom &middot; Wifi &middot; Kitchen"
        star = {4.5}
        price = "$30 / night"
        total = "$112 total"
      />

      <SearchResult 
        img = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        location = " Private room in New York City"
        title = "Stay at this spacious Edwardian House"
        description = "2 guest &middot; 1 bedroom &middot; 1.5 shared bedroom &middot; Wifi &middot; Kitchen"
        star = {4.5}
        price = "$30 / night"
        total = "$112 total"
      />

      <SearchResult 
        img = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        location = " Private room in New York City"
        title = "Stay at this spacious Edwardian House"
        description = "2 guest &middot; 1 bedroom &middot; 1.5 shared bedroom &middot; Wifi &middot; Kitchen"
        star = {4.5}
        price = "$30 / night"
        total = "$112 total"
      />
    </div>
  )
}

export default searchPage