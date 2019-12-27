import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatListModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTableModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatListModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTableModule
    ]
})
export class MaterialModule { }