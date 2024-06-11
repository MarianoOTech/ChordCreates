import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpHandler, HttpHeaders } from '@angular/common/http';

const LINKS_QUERY = gql`
  query FakeLinks  {
    links  {
        id
        url
        description
      }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GraphqlLinkService {
  constructor(private apollo: Apollo) {}

  getLinks(mytoken: string) {
    return this.apollo.query({
      query: LINKS_QUERY,
      variables: {},
      context: {
        headers: new HttpHeaders().set('Authorization','JWT ' + mytoken),
      },
    });
  }
}
