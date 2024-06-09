import db from './index'
import {collection, addDoc, getDocs, doc, getDoc} from 'firebase/firestore'

const tableName = 'quotes'

export const addQuote = async (payload) => {
  try {
    const quote = await addDoc(collection(db, tableName), payload)
    console.log('Quote added on Id ', quote.id)
    return true
  } catch (error) {
    console.log('Error when add quote', error)
    return false
  }
}

export const getQuote = async (id) => {
  const docRef = doc(db, tableName, id) // Thay thế "collectionName" và "documentID" bằng giá trị của bạn
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return docSnap.data()
  } else {
    console.log('No such document!')
    return null
  }
}

export const getQuotes = async () => {
  try {
    const quotes = []
    const querySnapshot = await getDocs(collection(db, tableName))
    querySnapshot.forEach((doc) => {
      quotes.push({id: doc.id, ...doc.data()})
    })
    return quotes
  } catch (error) {
    console.log('Error when geet all quotes', error)
    return []
  }
}
