import * as LinkApiUtil from '../util/link_api_util';

const RECEIVE_LINK_PREVIEW = 'RECEIVE_LINK_PREVIEW';

export const receiveLinkPreview = linkPreview => {
  return {
    type: RECEIVE_LINK_PREVIEW,
    linkPreview
  };
};

export const fetchLinkPreview = targetUrl => dispatch => {
  return LinkApiUtil.fetchLinkPreview(targetUrl).then(linkPreview => {
    dispatch(receiveLinkPreview(linkPreview));
  });
};
