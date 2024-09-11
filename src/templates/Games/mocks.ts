import { QUERY_GAMES } from '@/graphql/queries';

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {},
  },
  result: {
    data: {
      games: {
        __typename: 'GameEntityResponseCollection',
        data: [
          {
            __typename: 'GameEntity',
            id: '3',
            attributes: {
              __typename: 'Game',
              name: 'Hitman: Blood Money',
              slug: 'hitman_blood_money',
              price: 0.99,
              cover: {
                __typename: 'UploadFileEntityResponse',
                data: {
                  __typename: 'UploadFileEntity',
                  id: '1',
                  attributes: {
                    __typename: 'UploadFile',
                    url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/hitman_blood_money_834dbe90b4.png',
                    formats: {
                      large: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/large_hitman_blood_money_834dbe90b4.png',
                        hash: 'large_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'large_hitman_blood_money.jpg',
                        path: null,
                        size: 568.98,
                        width: 1000,
                        height: 463,
                        sizeInBytes: 568984,
                        provider_metadata: {
                          public_id: 'large_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                      small: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/small_hitman_blood_money_834dbe90b4.png',
                        hash: 'small_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'small_hitman_blood_money.jpg',
                        path: null,
                        size: 143.87,
                        width: 500,
                        height: 231,
                        sizeInBytes: 143871,
                        provider_metadata: {
                          public_id: 'small_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                      medium: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/medium_hitman_blood_money_834dbe90b4.png',
                        hash: 'medium_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'medium_hitman_blood_money.jpg',
                        path: null,
                        size: 317.94,
                        width: 750,
                        height: 347,
                        sizeInBytes: 317936,
                        provider_metadata: {
                          public_id: 'medium_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                      thumbnail: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/thumbnail_hitman_blood_money_834dbe90b4.png',
                        hash: 'thumbnail_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'thumbnail_hitman_blood_money.jpg',
                        path: null,
                        size: 38.31,
                        width: 245,
                        height: 113,
                        sizeInBytes: 38305,
                        provider_metadata: {
                          public_id: 'thumbnail_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                    },
                  },
                },
              },
              developers: {
                __typename: 'DeveloperRelationResponseCollection',
                data: [
                  {
                    __typename: 'DeveloperEntity',
                    id: '5',
                    attributes: {
                      __typename: 'Developer',
                      name: 'Io-Interactive',
                    },
                  },
                ],
              },
            },
          },
        ],
        meta: {
          __typename: 'ResponseCollectionMeta',
          pagination: {
            __typename: 'Pagination',
            total: 35,
            page: 1,
            pageSize: 9,
            pageCount: 4,
          },
        },
      },
    },
  },
};

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      start: 1,
    },
  },
  result: {
    data: {
      games: {
        __typename: 'GameEntityResponseCollection',
        data: [
          {
            __typename: 'GameEntity',
            id: '4',
            attributes: {
              __typename: 'Game',
              name: 'bloodborne',
              slug: 'bloodborne',
              price: 0.99,
              cover: {
                __typename: 'UploadFileEntityResponse',
                data: {
                  __typename: 'UploadFileEntity',
                  id: '1',
                  attributes: {
                    __typename: 'UploadFile',
                    url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/hitman_blood_money_834dbe90b4.png',
                    formats: {
                      large: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/large_hitman_blood_money_834dbe90b4.png',
                        hash: 'large_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'large_hitman_blood_money.jpg',
                        path: null,
                        size: 568.98,
                        width: 1000,
                        height: 463,
                        sizeInBytes: 568984,
                        provider_metadata: {
                          public_id: 'large_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                      small: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/small_hitman_blood_money_834dbe90b4.png',
                        hash: 'small_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'small_hitman_blood_money.jpg',
                        path: null,
                        size: 143.87,
                        width: 500,
                        height: 231,
                        sizeInBytes: 143871,
                        provider_metadata: {
                          public_id: 'small_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                      medium: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/medium_hitman_blood_money_834dbe90b4.png',
                        hash: 'medium_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'medium_hitman_blood_money.jpg',
                        path: null,
                        size: 317.94,
                        width: 750,
                        height: 347,
                        sizeInBytes: 317936,
                        provider_metadata: {
                          public_id: 'medium_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                      thumbnail: {
                        ext: '.jpg',
                        url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1721441662/thumbnail_hitman_blood_money_834dbe90b4.png',
                        hash: 'thumbnail_hitman_blood_money_834dbe90b4',
                        mime: 'image/jpeg',
                        name: 'thumbnail_hitman_blood_money.jpg',
                        path: null,
                        size: 38.31,
                        width: 245,
                        height: 113,
                        sizeInBytes: 38305,
                        provider_metadata: {
                          public_id: 'thumbnail_hitman_blood_money_834dbe90b4',
                          resource_type: 'image',
                        },
                      },
                    },
                  },
                },
              },
              developers: {
                __typename: 'DeveloperRelationResponseCollection',
                data: [
                  {
                    __typename: 'DeveloperEntity',
                    id: '5',
                    attributes: {
                      __typename: 'Developer',
                      name: 'Io-Interactive',
                    },
                  },
                ],
              },
            },
          },
        ],
        meta: {
          __typename: 'ResponseCollectionMeta',
          pagination: {
            __typename: 'Pagination',
            total: 35,
            page: 1,
            pageSize: 9,
            pageCount: 4,
          },
        },
      },
    },
  },
};
