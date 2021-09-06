import { init } from '../../../test';


describe( 'Controller#getAdjacent()', () => {
  test( 'can return the next/previous index.', () => {
    const splide = init( { speed: 0 } );
    const { Controller } = splide.Components;

    splide.go( 1 );

    expect( Controller.getNext() ).toBe( 2 );
    expect( Controller.getPrev() ).toBe( 0 );

    splide.go( 3 );

    expect( Controller.getNext() ).toBe( 4 );
    expect( Controller.getPrev() ).toBe( 2 );
  } );

  test( 'can return -1 if there is no adjacent slide.', () => {
    const splide = init( { speed: 0 } );
    const { Controller } = splide.Components;

    splide.go( 0 );
    expect( Controller.getPrev() ).toBe( -1 );

    splide.go( splide.length - 1 );
    expect( Controller.getNext() ).toBe( -1 );
  } );

  test( 'can return the first or last slide index if the rewind option is available.', () => {
    const splide = init( { rewind: true, speed: 0 } );
    const { Controller } = splide.Components;

    expect( Controller.getNext() ).toBe( 1 );
    expect( Controller.getPrev() ).toBe( splide.length - 1 );

    splide.go( splide.length - 1 );

    expect( Controller.getNext() ).toBe( 0 );
    expect( Controller.getPrev() ).toBe( splide.length - 2 );
  } );

  test( 'can return the first or last slide index in the loop mode.', () => {
    const splide = init( { type: 'loop', speed: 0 } );
    const { Controller } = splide.Components;

    expect( Controller.getNext() ).toBe( 1 );
    expect( Controller.getPrev() ).toBe( splide.length - 1 );

    splide.go( splide.length - 1 );

    expect( Controller.getNext() ).toBe( 0 );
    expect( Controller.getPrev() ).toBe( splide.length - 2 );
  } );
} );