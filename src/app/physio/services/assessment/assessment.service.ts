import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PatientDetails, PhysioForm } from '../../models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  constructor(private http: HttpClient) {}

  createAssessment(physioDetails: PhysioForm) {
    const assessment = Object.keys(physioDetails).reduce((formData, prop) => {
      Object.keys(physioDetails[prop])
        .filter(key => physioDetails[prop][key])
        .forEach(key =>
          formData.append(`${prop}[${key}]`, physioDetails[prop][key])
        );
      return formData;
    }, new FormData());

    return this.http.post<{ data: any; messages: string[] }>(
      `${environment.baseUrl}/assessment-service`,
      assessment
    );
  }

  getUserAssessments(userId: number) {
    const params = new HttpParams({
      fromObject: {
        userId,
        assessment: true
      }
    });
    return this.http.get<{ data: any; messages: string[] }>(
      `${environment.baseUrl}/assessment-service`,
      { params }
    );
  }
}
