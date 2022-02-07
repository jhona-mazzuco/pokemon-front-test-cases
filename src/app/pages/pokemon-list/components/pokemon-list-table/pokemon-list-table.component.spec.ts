import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListTableComponent } from './pokemon-list-table.component';

describe('PokemonListTableComponent', () => {
  let component: PokemonListTableComponent;
  let fixture: ComponentFixture<PokemonListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
