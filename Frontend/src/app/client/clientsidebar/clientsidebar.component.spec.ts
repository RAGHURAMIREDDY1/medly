import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsidebarComponent } from './clientsidebar.component';

describe('ClientsidebarComponent', () => {
  let component: ClientsidebarComponent;
  let fixture: ComponentFixture<ClientsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
