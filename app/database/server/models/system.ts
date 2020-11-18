// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Model} from '@nozbe/watermelondb';
import {MM_TABLES} from '@constants/database';
import field from '@nozbe/watermelondb/decorators/field';
import json from '@nozbe/watermelondb/decorators/json';

export default class System extends Model {
    static table = MM_TABLES.SERVER.SYSTEM

    @field('name') name!: string
    @json('value', (rawJson) => rawJson) value!: string
}