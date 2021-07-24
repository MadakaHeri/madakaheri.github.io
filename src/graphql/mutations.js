/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHotel = /* GraphQL */ `
  mutation CreateHotel(
    $input: CreateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    createHotel(input: $input, condition: $condition) {
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
export const updateHotel = /* GraphQL */ `
  mutation UpdateHotel(
    $input: UpdateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    updateHotel(input: $input, condition: $condition) {
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
export const deleteHotel = /* GraphQL */ `
  mutation DeleteHotel(
    $input: DeleteHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    deleteHotel(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createPrice = /* GraphQL */ `
  mutation CreatePrice(
    $input: CreatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    createPrice(input: $input, condition: $condition) {
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
export const updatePrice = /* GraphQL */ `
  mutation UpdatePrice(
    $input: UpdatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    updatePrice(input: $input, condition: $condition) {
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
export const deletePrice = /* GraphQL */ `
  mutation DeletePrice(
    $input: DeletePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    deletePrice(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPostChannel = /* GraphQL */ `
  mutation CreatePostChannel(
    $input: CreatePostChannelInput!
    $condition: ModelPostChannelConditionInput
  ) {
    createPostChannel(input: $input, condition: $condition) {
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
export const updatePostChannel = /* GraphQL */ `
  mutation UpdatePostChannel(
    $input: UpdatePostChannelInput!
    $condition: ModelPostChannelConditionInput
  ) {
    updatePostChannel(input: $input, condition: $condition) {
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
export const deletePostChannel = /* GraphQL */ `
  mutation DeletePostChannel(
    $input: DeletePostChannelInput!
    $condition: ModelPostChannelConditionInput
  ) {
    deletePostChannel(input: $input, condition: $condition) {
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
export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
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
export const updatePostTag = /* GraphQL */ `
  mutation UpdatePostTag(
    $input: UpdatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    updatePostTag(input: $input, condition: $condition) {
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
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
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
export const createPostPostTag = /* GraphQL */ `
  mutation CreatePostPostTag(
    $input: CreatePostPostTagInput!
    $condition: ModelPostPostTagConditionInput
  ) {
    createPostPostTag(input: $input, condition: $condition) {
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
export const updatePostPostTag = /* GraphQL */ `
  mutation UpdatePostPostTag(
    $input: UpdatePostPostTagInput!
    $condition: ModelPostPostTagConditionInput
  ) {
    updatePostPostTag(input: $input, condition: $condition) {
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
export const deletePostPostTag = /* GraphQL */ `
  mutation DeletePostPostTag(
    $input: DeletePostPostTagInput!
    $condition: ModelPostPostTagConditionInput
  ) {
    deletePostPostTag(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
