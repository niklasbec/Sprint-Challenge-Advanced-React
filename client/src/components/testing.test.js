import { operations, myHouse, array, arrayCopy } from './testing'

describe('dummy tests', () => { 
  it('is running fine', () => { 
      expect(5).toBe(5)
      expect(NaN).not.toBeNaN
      expect(['hi']).toContain('hi')
    })
    
    it('is defined', () => {
      expect(operations).toBeDefined()
  })
  
  describe('all operatios are working as intended', () => {
    it('returns correct sum', () => { 
       expect(operations(20, 25).sum).toBe(45)
    })

    it('returns correct sum', () => { 
      expect(operations(20, 25).product).toBe(500)
   })

   it('returns correct sum', () => { 
    expect(operations(20, 25).max).toBe(25)
 })

  })
})

describe('house test', () => { 
  it(' has correct properties', () => { 
      expect(myHouse).toHaveProperty('color')
      expect(myHouse).toHaveProperty('price')
      expect(myHouse).toHaveProperty('size')
    })
    
    it('returning correct value', () => {
      expect(myHouse.price).toBe(20000)
      expect(myHouse.size).toBe('big')
      expect(myHouse.color).toBe('blue')
      expect(myHouse.pool).toBe(true)
  })
})

describe('array similar test', () => { 
  it('has same value', () => { 
    expect(array).toEqual(expect.arrayContaining(arrayCopy));
    })
    
})