/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel {
    onCreateHotel {
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
export const onUpdateHotel = /* GraphQL */ `
  subscription OnUpdateHotel {
    onUpdateHotel {
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
export const onDeleteHotel = /* GraphQL */ `
  subscription OnDeleteHotel {
    onDeleteHotel {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan {
    onCreatePlan {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan {
    onUpdatePlan {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan {
    onDeletePlan {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreatePrice = /* GraphQL */ `
  subscription OnCreatePrice {
    onCreatePrice {
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
export const onUpdatePrice = /* GraphQL */ `
  subscription OnUpdatePrice {
    onUpdatePrice {
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
export const onDeletePrice = /* GraphQL */ `
  subscription OnDeletePrice {
    onDeletePrice {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreatePostChannel = /* GraphQL */ `
  subscription OnCreatePostChannel {
    onCreatePostChannel {
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
export const onUpdatePostChannel = /* GraphQL */ `
  subscription OnUpdatePostChannel {
    onUpdatePostChannel {
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
export const onDeletePostChannel = /* GraphQL */ `
  subscription OnDeletePostChannel {
    onDeletePostChannel {
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
export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
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
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
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
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
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
export const onCreatePostPostTag = /* GraphQL */ `
  subscription OnCreatePostPostTag {
    onCreatePostPostTag {
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
      postTag {
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
    }
  }
`;
export const onUpdatePostPostTag = /* GraphQL */ `
  subscription OnUpdatePostPostTag {
    onUpdatePostPostTag {
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
      postTag {
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
    }
  }
`;
export const onDeletePostPostTag = /* GraphQL */ `
  subscription OnDeletePostPostTag {
    onDeletePostPostTag {
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
      postTag {
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
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
