"use client"
import { gql, useQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const getBooksQuery = gql`   
        {
            books {
                title
                genre
                id
            }
        }    
`;
const addBooksQuery = gql`
  mutation AddBook($title: String!, $genre: String!, $authorId: String!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      id
      title
      genre
    }
  }
`;


const AddBooks = () => {    
const { loading, error, data } = useQuery(getBooksQuery)
const [addBook] = useMutation(addBooksQuery);
console.log (data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

 return (
    <div>
      <h4>Story Story ...Story</h4>
        <AddBookForm addBook={addBook} />  <hr />    
      <ul>
        {data.books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> <br />
            {book.genre} <hr />
          </li>
        ))}
      </ul>
    </div>

    
  )

}

const AddBookForm = ({ addBook }) => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault()
      addBook({ variables: { title, genre, authorId } })
      setTitle('')
      setGenre('')
      setAuthorId('');
    }
    return (
        <div className="container  mx-auto">
          <form id="addbook" onSubmit={handleSubmit}>
            
               
                        <div className="field">
                          <label><h6>Story Title</h6></label><br />
                          <input className=" form-control w-100 my-2" type="text"  value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                
                        <div className="field">
                          <label><h6>Write Your Story Here</h6></label><br />
                          <input className=" form-control w-100 my-2" type="text" value={genre} onChange={e => setGenre(e.target.value)} />
                        </div>

                        {/* <div className="field">
                        <label>Author ID</label>
                        <input type="text" value={authorId} onChange={e => setAuthorId(e.target.value)} />
                        </div>
                */}
               
                
                <div>
                  <button className="btn btn-info" type="submit">Submit</button>
                </div>
            
          </form>
        </div>
      )
    }


export default AddBooks