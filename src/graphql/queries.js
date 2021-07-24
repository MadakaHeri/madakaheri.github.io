/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHotel = /* GraphQL */ `
  query GetHotel($id: ID!) {
    getHotel(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchHotels = /* GraphQL */ `
  query SearchHotels(
    $filter: SearchableHotelFilterInput
    $sort: SearchableHotelSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchHotels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const syncHotels = /* GraphQL */ `
  query SyncHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHotels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      hotelId
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hotelId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchPlans = /* GraphQL */ `
  query SearchPlans(
    $filter: SearchablePlanFilterInput
    $sort: SearchablePlanSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPlans(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        hotelId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const syncPlans = /* GraphQL */ `
  query SyncPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        hotelId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      hotelId
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hotelId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchRooms = /* GraphQL */ `
  query SearchRooms(
    $filter: SearchableRoomFilterInput
    $sort: SearchableRoomSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRooms(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        hotelId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const syncRooms = /* GraphQL */ `
  query SyncRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        hotelId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrice = /* GraphQL */ `
  query GetPrice($id: ID!) {
    getPrice(id: $id) {
      id
      planId
      roomId
      price
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPrices = /* GraphQL */ `
  query ListPrices(
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        planId
        roomId
        price
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchPrices = /* GraphQL */ `
  query SearchPrices(
    $filter: SearchablePriceFilterInput
    $sort: SearchablePriceSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPrices(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        planId
        roomId
        price
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const syncPrices = /* GraphQL */ `
  query SyncPrices(
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        planId
        roomId
        price
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chainPostId
        PostType
        PostContentType
        postChannelId
        title
        desc
        data
        twitter
        github
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        channel {
          id
          twitter
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      chainPostId
      PostType
      PostContentType
      postChannelId
      title
      desc
      data
      twitter
      github
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      channel {
        id
        twitter
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      tags {
        items {
          id
          postID
          postTagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chainPostId
        PostType
        PostContentType
        postChannelId
        title
        desc
        data
        twitter
        github
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        channel {
          id
          twitter
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listPostChannels = /* GraphQL */ `
  query ListPostChannels(
    $filter: ModelPostChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        twitter
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostChannel = /* GraphQL */ `
  query GetPostChannel($id: ID!) {
    getPostChannel(id: $id) {
      id
      twitter
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const syncPostChannels = /* GraphQL */ `
  query SyncPostChannels(
    $filter: ModelPostChannelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostChannels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        twitter
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        twitter
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostTag = /* GraphQL */ `
  query GetPostTag($id: ID!) {
    getPostTag(id: $id) {
      id
      twitter
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          postID
          postTagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncPostTags = /* GraphQL */ `
  query SyncPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        twitter
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostPostTags = /* GraphQL */ `
  query SyncPostPostTags(
    $filter: ModelPostPostTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostPostTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postID
        postTagID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        post {
          id
          chainPostId
          PostType
          PostContentType
          postChannelId
          title
          desc
          data
          twitter
          github
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        postTag {
          id
          twitter
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      profile
      avator
      twitter
      github
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profile
        avator
        twitter
        github
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        profile
        avator
        twitter
        github
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
