import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { ParentComponent } from './components/demo/input-output/parent/parent.component';
import { InputOutputComponent } from './components/demo/input-output/input-output.component';
import { ChildComponent } from './components/demo/input-output/child/child.component';
import { PostComponent } from './post/post.component';
import { PostUserComponent } from './post/user/user.component';
import { PostContentComponent } from './post/content/content.component';
import { PostFormComponent} from './postform/postform.component';
import { PostCardComponent } from './postcard/postcard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    ParentComponent,
    InputOutputComponent,
    ChildComponent,
   
    PostComponent,
     PostUserComponent,
    PostContentComponent,
    PostFormComponent,
    PostCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
