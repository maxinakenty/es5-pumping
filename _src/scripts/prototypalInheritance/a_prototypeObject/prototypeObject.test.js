import { userWithAge, rabbit, data } from './';
import { 
  firstResult,
  secondResult,
  thirdResult,
  fourthResult,
  bed,
  pockets,
} from './tasks';

describe('prototype object', function() {

  describe('rabbit object', function() {
    it('should animal is a prototype', function() {
      expect(rabbit.eat).toBe(true);
    });

    it('should rabbit has property jump', function() {
      expect(rabbit.hasOwnProperty('jump')).toBe(true);
    });

    it('should rabbit does\'t have a property eat', function() {
      expect(rabbit.hasOwnProperty('eat')).toBe(false);
    });

    it('should get prototype of rabbit', function() {
      expect(Object.getPrototypeOf(rabbit)).toEqual({ eat: true });
    });
  });

  describe('data object', function() {
    it('should data does\'t have a  built-in method toString', function() {
      expect(data.toString).toBe(undefined);
    });
  });


  describe('userWithAge', function() {
    it('should user has property age', function() {
      expect(userWithAge.age).toBe(29);
    });
  });


  describe('tasks', function() {
    it('should get jumps property from rabbit object', function() {
      expect(firstResult).toBe(true);
    });

    it('should remove jups property from rabbit object', function() {
      expect(secondResult).toBe(null);
    });

    it('should remove jups property from animals object', function() {
      expect(thirdResult).toBe(undefined);
    });

    it('should rabbit has property full', function() {
      expect(fourthResult).toBe(true);
    });

    it('should pocket object has property pen', function() {
      expect(pockets.pen).toBe(3);
    });
  });
});